const Plancard =({heading, description}) => {
    return (
      <div>
          <h1 className="w-75 title">{heading}</h1>
          <p className="my-4">{description}</p>
      </div>
    );
  }
  export default Plancard