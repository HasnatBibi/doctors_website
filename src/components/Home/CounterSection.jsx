import { useEffect, useState } from 'react'

const Counter = ({ end, label, icon, duration = 2000 }) => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(1 + (end - 1) * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-xs mx-auto">
      <div className="h-24 w-24 flex justify-center items-center">
        {icon}
      </div>
      <div className="text-4xl text-black flex justify-center items-center pt-6">
        {count}%
      </div>
      <div className="mt-2 text-center text-lg text-black flex justify-center items-center">
        {label}
      </div>
    </div>
  )
}

export default function CounterSection() {
  const metrics = [
    { 
      end: 99, 
      label: 'First Pass Rate',
      icon: (
        <img src="../src/assets/accuracy-rate.svg" alt="icon" width={80} height={80} />
      )
    },
    { 
      end: 98, 
      label: 'Accuracy',
      icon: (
        <img src="../src/assets/denials.svg" alt="icon" width={80} height={80} />
      )
    },
    { 
      end: 25, 
      label: 'Cost Reduction',
      icon: (
        <img src="../src/assets/hipaa.svg" alt="icon" width={80} height={80} />
      )
    },
    { 
      end: 30, 
      label: 'Revenue Increase',
      icon: (
        <img src="../src/assets/revenue-increase.svg" alt="icon" width={80} height={80} />
      )
    }
  ]

  return (
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="relative flex items-stretch">
              <Counter end={metric.end} label={metric.label} icon={metric.icon} />
              {index < metrics.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-full w-1 -translate-y-1/2 bg-orange-300 md:block" />

              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
