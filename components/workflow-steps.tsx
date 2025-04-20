import { Card, CardContent } from "@/components/ui/card"
import { Search, List, Check, FileEdit } from "lucide-react"

export default function WorkflowSteps() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-teal-400" />,
      title: "Analyze Target Page",
      description: "Our AI agent analyzes your target page to understand its content, structure, and context.",
    },
    {
      icon: <List className="h-10 w-10 text-teal-400" />,
      title: "Find Link Opportunities",
      description: "The system identifies relevant internal pages that would make valuable linking opportunities.",
    },
    {
      icon: <Check className="h-10 w-10 text-teal-400" />,
      title: "Review Link Opportunities",
      description: "You can review and approve the suggested link opportunities before implementation.",
    },
    {
      icon: <FileEdit className="h-10 w-10 text-teal-400" />,
      title: "Apply Internal Link Changes",
      description: "Our AI rewrites content sections to naturally incorporate the internal links.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
          <div className="h-2 bg-teal-500"></div>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300 mb-4">{step.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
