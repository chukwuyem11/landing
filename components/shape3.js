const Shape3 = () => {
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
        d="M68.6 30.5c3.6 4.5 3.1 12 4 20.4.9 8.3 3 17.6-.6 25.4-3.5 7.9-12.8 14.4-20 12.4-7.3-2-12.5-12.5-20.7-20.3-8.1-7.9-19-13.1-19.8-19.1-.7-6 8.9-12.7 17-17.1 8.1-4.5 14.8-6.7 21.9-7.1 7.1-.4 14.6 1 18.2 5.4z"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
    )
}

export default Shape3