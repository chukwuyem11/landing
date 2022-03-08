const Shape = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
        <defs>
          <linearGradient x1="0" x2="1" y1="1" y2="0">
            <stop offset="0%" stopColor="rgba(92, 20, 236, 1)"></stop>
            <stop offset="100%" stopColor="rgba(251, 168, 31, 1)"></stop>
          </linearGradient>
        </defs>
        <path
          fill="rgba(92, 20, 236, 1)"
          strokeWidth="0"
          d="M26.4-31.1c3.1 7.9-2.1 19.5-4.3 28.9-2.2 9.4-1.4 16.6-4.5 22.1-3.2 5.5-10.4 9.2-16.3 7.9-5.9-1.3-10.4-7.7-14.8-13.2-4.4-5.5-8.5-10-8-14 .6-4.1 5.8-7.5 10.2-15.4C-6.9-22.6-3.5-34.9 4.1-39c7.5-4 19.1.1 22.3 7.9z"
          transform="translate(50 50)"
          style={{
            WebkitTransition: "all 0.3s ease 0s",
            transition: "all 0.3s ease 0s",
          }}
        ></path>
      </svg>
    )
}

export default Shape