'use client';

import { useState } from 'react';
import BaseText from '@/components/text/BaseText';
import Card from '@/components/cards/Card';
import Input from '@/components/Inputs/Input';
import { useTranslation } from 'react-i18next';
import BaseButton from '../buttons/BaseButton';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <BaseText fontSize="xxl" fontWeight="semibold" color="primary" className="mb-2 text-center">
        {t('contact.touch')}
      </BaseText>

      <BaseText fontSize="md" color="muted" className="mb-6 text-center" lineHeight="relaxed">
        {t('contact.opportunities')}
      </BaseText>

      {submitSuccess && (
        <div className="mb-6 p-4 rounded-lg bg-success/20 border border-success text-center">
          <BaseText color="success" fontWeight="medium">
            {t('contact.messageSent')}
          </BaseText>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 rounded-lg bg-error/20 border border-error text-center">
          <BaseText color="error" fontWeight="medium">
            {submitError}
          </BaseText>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            <BaseText fontSize="sm" color="foreground">
              {t('contact.form.name.label')}
            </BaseText>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder= {t('contact.form.name.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            <BaseText fontSize="sm" color="foreground">
              {t('contact.form.email.label')}
            </BaseText>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t('contact.form.email.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            <BaseText fontSize="sm" color="foreground">
              {t('contact.form.message.label')}
            </BaseText>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-300"
            placeholder={t('contact.form.message.placeholder')}
          />
        </div>

        <div className="text-center">
          <BaseButton>{isSubmitting ? t('contact.sending') : t('contact.sendMessage')}</BaseButton>
        </div>
      </form>
    </Card>
  );
}
