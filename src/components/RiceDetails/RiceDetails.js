import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const riceItems = [
    "1121 Steam Basmati Rice",
    "1121 Sella Basmati Rice",
    "1121 Golden Sella Basmati Rice",
    "1509 Steam Basmati Rice",
    "1509 Sella Basmati Rice",
    "1509 Golden Sella Basmati Rice",
    "1401 Steam Basmati Rice",
    "Pusa Sella Basmati Rice",
    "Pusa Golden Sella Basmati Rice",
    "Sugandha Steam Rice",
    "Sugandha Sella Rice",
    "Sugandha Golden Sella Rice",
    "Sharbati Steam Rice",
    "Sharbati Sella Rice",
    "Sharbati Golden Sella Rice",
    "PR 11 Steam Rice",
    "PR 11 Sella Rice",
    "PR 11 Golden Sella Rice",
    "Long Grain Parboiled Rice (Low & Medium Broken)",
    "Long Grain White Rice (Low & Medium Broken)",
    "Swarna Parboiled Rice",
    "Swarna White Rice",
    "Sona Mansoori Steam Rice",
    "Sona Mansoori Raw Rice"
]

export function RiceDetails({ type }) {
    const [selectedItem, setSelectedItem] = useState(riceItems[0])

    const filteredItems = type === 'Basmati Rice' 
        ? riceItems.filter(item => item.toLowerCase().includes('basmati'))
        : riceItems.filter(item => !item.toLowerCase().includes('basmati'))

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{type}</CardTitle>
                <CardDescription>Select a rice variety to view details</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        {filteredItems.map((item) => (
                            <Button
                                key={item}
                                variant={selectedItem === item ? "default" : "outline"}
                                className="w-full justify-start"
                                onClick={() => setSelectedItem(item)}
                            >
                                {item}
                            </Button>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">{selectedItem}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {selectedItem.toLowerCase().includes('basmati') 
                                ? "Known for its distinctive aroma and long grains." 
                                : "Versatile rice variety suitable for various cuisines."}
                        </p>
                        <div className="aspect-video relative rounded-lg overflow-hidden">
                            <Image 
                                src="https://res.cloudinary.com/dtivafy25/image/upload/v1735909486/Organic-Jeera-Cumin-Seeds7479658771854209_k0olmp.jpg" 
                                alt={selectedItem} 
                                layout="fill" 
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
