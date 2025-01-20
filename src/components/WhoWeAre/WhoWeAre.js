import { Card, CardContent } from "@/components/ui/card"

export default function WhoWeAre() {
  return (
    <div className="flex items-center justify-center p-4 mt-12 mb-12">
      <Card className="max-w-7xl w-full bg-white shadow-sm">
        <CardContent className="p-8 md:p-12">
          <div className="space-y-8 md:space-y-12">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Who We Are?</h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 text-gray-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>

              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

