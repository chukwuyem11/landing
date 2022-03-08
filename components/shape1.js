const Stuff = () => {
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
        d="M7.1-6.7c4 3.6 10.5 5.2 15.2 11.3 4.6 6.2 7.3 17 3.3 25.3-4 8.2-14.8 14-24.3 12.7-9.4-1.4-17.5-9.8-21.2-18.1-3.8-8.3-3.1-16.4-3.6-25-.5-8.7-2.3-17.9 1.4-21.5 3.7-3.7 12.9-1.8 18.3 2 5.3 3.8 6.9 9.6 10.9 13.3z"
        transform="translate(50 50)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
    )
}

export default Stuff