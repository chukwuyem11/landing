const Shape4 = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <defs>
        <linearGradient x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(92, 20, 236, 0.1)"></stop>
          <stop offset="100%" stopColor="rgba(251, 168, 31, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="rgba(92, 20, 236, 0.1)"
        stroke="rgba(92, 20, 236, 1)"
        strokeWidth="0"
        d="M71.2 24.4c3.4 7.8 1.2 16.7 2 26.4.9 9.8 4.7 20.3 1.3 21.8-3.4 1.4-13.9-6.3-22.1-8.7-8.3-2.3-14.1.7-18.4-.7-4.4-1.5-7.1-7.3-8-14.1-.9-6.8.1-14.4 4.4-22.2 4.3-7.8 11.9-15.8 20.2-16.4 8.3-.6 17.2 6.1 20.6 13.9z"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
    )
}

export default Shape4