import './Cards.css';

export default function renderCards() {
  let vacationPlans = [
    {
      title: "Mock Title 1",
      description: "Explore the beautiful beaches of Hawaii"
    },
    {
      title: "Mock Title 2",
      description: "Experience the vibrant nightlife of New York City"
    },
    {
      title: "Mock Title 3",
      description: "Discover the historical landmarks of Rome"
    },
    {
      title: "Mock Title 4",
      description: "Go on a thrilling safari adventure in Africa"
    },
    {
      title: "Mock Title 5",
      description: "Relax and unwind at a luxurious spa retreat"
    },
    {
      title: "Mock Title 6",
      description: "Embark on an epic road trip across the United States"
    },
    {
      title: "Mock Title 7",
      description: "Indulge in delicious cuisine on a food tour in Asia"
    },
    {
      title: "Mock Title 8",
      description: "Immerse yourself in the rich culture of Paris"
    }
  ];

  return (
    <div className="row g-5 align-items-start mx-auto">
      {vacationPlans.map((param, index) => (
        <div key={index} className="col-lg-3 mx-auto">
          <div className="card text-light text-center mx-auto ratio ratio-16x9 shadow">
            <div className="card-body d-flex">
              {/* <h5 className="card-title">{param.title}</h5> */}
              <p className="card-text mx-auto my-auto">{param.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}