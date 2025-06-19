'use client';

import { Badge } from '@/components/ui/badge';
import { User, BookOpen, CreditCard, Users } from 'lucide-react';
import { PiMedal } from "react-icons/pi";
import { FaRegCircleQuestion } from "react-icons/fa6";

const features = [
  {
    icon: <User className="w-6 h-6 text-white" />,
    title: 'Generate Leads Easily',
    description: 'With plug-and-play emails, website pages, lead generators, and sales scripts.',
    bg: 'bg-secondary',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: 'Land & Upsell More Clients',
    description: 'With irresistible offers that communicate the value you provide.',
    bg: 'bg-primary',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-white" />,
    title: 'Get Personalized Coaching',
    description: 'With a dedicated growth coach to help you accomplish your goals.',
    bg: 'bg-teal-500',
  },
  {
    icon: <PiMedal className="w-6 h-6 text-white" />,
    title: 'Get Results For Your Clients',
    description: 'With ready-made content to use in every coaching session.',
    bg: 'bg-green-500',
  },
  {
    icon: <FaRegCircleQuestion className="w-6 h-6 text-white" />,
    title: 'Boost Your Authority',
    description: 'With world-class coaching certifications from top industry leaders.',
    bg: 'bg-sky-400',
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Stay Motivated and Inspired',
    description: 'With access to resources, trainings, and a community of over 1,000 coaches.',
    bg: 'bg-orange-500',
  },
];

export default function GrowthFeatures() {
  return (
    <section className="bg-muted/50 rounded-3xl max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12 space-y-3">
        <Badge className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
          Tools & Resources
        </Badge>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary">
          Everything You Need to Grow
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description, bg }, i) => (
          <div key={i} className="flex flex-col items-start gap-4 text-center sm:text-left">
            <div className={`rounded-lg p-3 ${bg} w-fit mx-auto sm:mx-0 self-center`}>{icon}</div>
            <h3 className="text-lg font-semibold text-primary self-center">{title}</h3>
            <p className="text-sm text-foreground text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
