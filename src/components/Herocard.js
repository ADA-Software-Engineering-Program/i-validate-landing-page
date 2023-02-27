const Herocard =({heading, description}) => {
    return (
      <div>
          <h1 className=" title">
            {heading}
          </h1>
          <p className="my-4">{description}</p>
      </div>
    );
  }
  export default Herocard