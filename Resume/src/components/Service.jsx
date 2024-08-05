import '../styles/Service.css';

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Service = () => {
  return (
    <div className="service-container" id="service">
      <div className="service-inner-container service-inner-container-md service-inner-container-lg">
        <h2 className="service-title">My Services</h2>
        <div className="service-grid service-grid-md service-grid-lg">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-id">{service.id}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
