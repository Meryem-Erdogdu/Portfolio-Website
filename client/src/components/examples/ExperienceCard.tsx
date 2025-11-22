import ExperienceCard from '../ExperienceCard';

export default function ExperienceCardExample() {
  return (
    <ExperienceCard
      startDate="2024"
      endDate="Present"
      title="Senior Frontend Engineer"
      company="Klaviyo"
      companyUrl="https://www.klaviyo.com/"
      description="Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
      technologies={['JavaScript', 'TypeScript', 'React', 'Storybook']}
    />
  );
}
