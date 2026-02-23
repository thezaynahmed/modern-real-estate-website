import { AreaGuide } from "@/components/shared/area-guide";

// Mock data fetcher
async function getArea(area: string) {
    return {
        areaName: area.charAt(0).toUpperCase() + area.slice(1).replace("-", " "),
        description: "Welcome to one of the most distinguished neighborhoods in the Greater Toronto Area. This community is defined by sprawling luxury estates, ultra-modern new builds, and a canopy of mature, century-old trees.",
        marketStats: {
            avgPrice: "$4,250,000",
            activeListings: 24,
            avgDays: 14
        },
        localHighlights: [
            {
                icon: "school",
                title: "Top-Tier Education",
                description: "Home to some of the province's highest-ranking public schools and elite private academies.",
            },
            {
                icon: "parks",
                title: "Lush Green Spaces",
                description: "Kilometers of protected ravine trails and lakefront parks designed for active, serene lifestyles.",
            },
            {
                icon: "coffee",
                title: "Boutique Villages",
                description: "Charming local hubs featuring artisanal cafes, fine dining, and exclusive retail experiences.",
            }
        ]
    };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
    const areaLabel = (await params).area;
    const area = await getArea(areaLabel);

    return (
        <AreaGuide
            areaName={area.areaName}
            description={area.description}
            marketStats={area.marketStats}
            localHighlights={area.localHighlights}
        />
    );
}
