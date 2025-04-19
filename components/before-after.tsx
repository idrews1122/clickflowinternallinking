import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BeforeAfter() {
  const examples = [
    {
      original: "Elegant, with a velvety texture and a long finish.",
      rewritten:
        "Elegant, presenting a light and unctuous flavor that transitions into a velvety texture and a long finish.",
      score: "90%",
    },
    {
      original: "Shows an expressive core of plum sauce, dried raspberry, red licorice and espresso flavors.",
      rewritten:
        "Shows an expressive core of plum sauce, dried raspberry, red licorice and espresso that creates a light and unctuous flavor profile.",
      score: "96%",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {examples.map((example, index) => (
        <Card key={index} className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl flex justify-between items-center">
              <span>Before & After</span>
              <span className="text-teal-400">Score: {example.score}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium text-gray-400 mb-2">ORIGINAL</div>
                <div className="p-4 bg-gray-900 rounded-md border border-gray-700">{example.original}</div>
              </div>

              <div>
                <div className="text-sm font-medium text-teal-400 mb-2">REWRITTEN</div>
                <div className="p-4 bg-gray-900/50 rounded-md border border-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-teal-500/10"></div>
                  <div className="relative">
                    {example.rewritten.split("light and unctuous flavor").map((part, i, arr) => {
                      if (i === 0) {
                        return (
                          <span key={i}>
                            {part}
                            <span className="text-teal-400 font-medium">light and unctuous flavor</span>
                          </span>
                        )
                      }
                      return <span key={i}>{part}</span>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
