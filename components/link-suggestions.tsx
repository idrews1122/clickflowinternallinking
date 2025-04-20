import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function LinkSuggestions() {
  const suggestions = [
    {
      title: "Best Wine Pairings for Merguez | Winedeals",
      url: "https://www.winedeals.com/pairings/wine-pairings-for-merguez.html",
    },
    {
      title: "Best Wine Pairings for Argentine asado | Winedeals",
      url: "https://www.winedeals.com/pairings/wine-pairings-for-argentine-asado.html",
    },
    {
      title: "Barrel-Aged Wine: How Barrel Aging Transforms Wine",
      url: "https://www.winedeals.com/blog/post/barrel-aged-wine",
    },
    {
      title: "Demystifying Distilled Spirits: A Beginner's Guide",
      url: "https://www.winedeals.com/blog/post/in-the-context-of-liquor-what-are-spirits",
    },
    {
      title: "Best Wine Pairings for Ropa vieja | Winedeals",
      url: "https://www.winedeals.com/pairings/wine-pairings-for-ropa-vieja.html",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-gray-800 border-gray-700 mb-6">
        <CardContent className="pt-6">
          <div className="text-xl font-bold mb-4">Review Internal Link Suggestions</div>
          <p className="text-gray-300 mb-6">Review and approve content rewriting with internal links</p>

          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg border ${index === 0 ? "border-teal-500/50 bg-gray-800" : "border-gray-700 bg-gray-900"}`}
            >
              <div className="flex justify-between items-center">
                <div className="w-full pr-4">
                  <div className="font-medium mb-1">{suggestion.title}</div>
                  <div className="text-sm text-teal-400 break-all">{suggestion.url}</div>
                </div>
                <div className="flex items-center space-x-3 flex-shrink-0 hidden sm:flex">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center cursor-default">
                    <Check className="h-4 w-4 text-teal-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center cursor-default">
                    <X className="h-4 w-4 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
