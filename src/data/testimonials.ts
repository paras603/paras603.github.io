export interface Testimonial {
  name: string;
  position: string;
  company: string;
  feedback: string;
  avatar: string; // URL to an image
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    position: 'Senior Engineer',
    company: 'TechNova Inc.',
    feedback:
      "Paras is a fantastic developer. His attention to detail and design precision is unmatched. Always delivers beyond expectations.",
    avatar: '/assets/testimonials/jane.jpg',
  },
  {
    name: 'John Smith',
    position: 'Project Manager',
    company: 'Innovate Labs',
    feedback:
      "Working with Paras was a breeze. He’s reliable, communicates clearly, and consistently builds scalable frontend solutions.",
    avatar: '/assets/testimonials/john.jpg',
  },
  {
    name: 'Ava Martinez',
    position: 'UX Designer',
    company: 'DesignFlow',
    feedback:
      "Paras brings creativity and code together like few others. His collaboration skills and eye for UI make him an asset to any team.",
    avatar: '/assets/testimonials/ava.jpg',
  },
];
