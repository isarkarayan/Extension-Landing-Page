"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  product: string;
  message: string;
}

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const products = [
    'Blazing Tool - Chrome Extension',
    'Feature Request',
    'Bug Report',
    'General Inquiry',
    'Technical Support'
  ];

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    try {
      // Discord Webhook URL (replace with your webhook URL)
      const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';
      
      const discordMessage = {
        embeds: [{
          title: '📧 New Support Request',
          color: 0x3B82F6,
          fields: [
            { name: '👤 Name', value: data.name, inline: true },
            { name: '📧 Email', value: data.email, inline: true },
            { name: '📝 Subject', value: data.subject, inline: false },
            { name: '🏷️ Product', value: selectedProduct, inline: true },
            { name: '💬 Message', value: data.message, inline: false }
          ],
          timestamp: new Date().toISOString(),
          footer: { text: 'Blazing Tool Support System' }
        }]
      };

      // In a real implementation, you would send this to your Discord webhook
      // await fetch(webhookUrl, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(discordMessage)
      // });

      console.log('Form data:', { ...data, product: selectedProduct });
      console.log('Discord message:', discordMessage);

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
      setSelectedProduct('');
      setIsOpen(false);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-semibold text-gray-900">Contact Support</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="mt-1"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className="mt-1"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Product */}
                <div>
                  <Label htmlFor="product">Choose Product *</Label>
                  <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((product) => (
                        <SelectItem key={product} value={product}>
                          {product}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {!selectedProduct && (
                    <p className="text-red-500 text-sm mt-1">Please select a product</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    className="mt-1"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting || !selectedProduct}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatSupport;