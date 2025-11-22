import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="Spotify Profile"
      description="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
      projectUrl="https://spotify-profile.herokuapp.com/"
      technologies={['React', 'Express', 'Spotify API', 'Heroku']}
      stars={698}
    />
  );
}
