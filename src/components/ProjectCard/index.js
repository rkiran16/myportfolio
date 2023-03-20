const ProjectCard = ({ project }) => {
  const { image, name } = project;
  return (
    <div className="shadow position-relative px-2 py-4 rounded">
      <div className="project-card-img">
        <img src={image} alt={name} className="" />
      </div>
    </div>
  )
}

export default ProjectCard;