export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  isContract: boolean;
  startDate: string;
  endDate: string;
  location: string;
  locationType: 'Remote' | 'On-site' | 'Hybrid';
  description: string;
  techTags: string[];
}