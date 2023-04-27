function Wave(props) {
  const color = "#0a4c86";
  if (props.type === "1") {
    return (
      <div className="wave1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color}
            fill-opacity="1"
            d="M0,128L80,154.7C160,181,320,235,480,224C640,213,800,139,960,122.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  } else if (props.type === "2") {
    return (
      <div className="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color}
            fill-opacity="1"
            d="M0,192L80,176C160,160,320,128,480,122.7C640,117,800,139,960,138.7C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  } else {
    return (
      <div className="wave3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={color}
            fill-opacity="1"
            d="M0,224L80,197.3C160,171,320,117,480,112C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}

export default Wave;
