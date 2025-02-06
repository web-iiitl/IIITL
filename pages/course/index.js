// import React from 'react'
// import { createClient } from "next-sanity";
// import imageUrlBuilder from "@sanity/image-url";
// import Link from 'next/link';
// import PortableText from "react-portable-text"
// import { useRouter } from 'next/router'
// import Navbar from '../../components/Navbar'
// import Layout from '../../components/Layout'

// const index = ({ course,admissions}) => {
//     const colorGradients = [
//         "bg-blue-500",
//         "bg-purple-500",
//         "bg-green-500",
//         "bg-orange-500",
//         ];
//     const router = useRouter()
//     const id = router.query.id

//     const client = createClient({
//         projectId: "10usolyp",
//         dataset: "production",

//     });

//     const builder = imageUrlBuilder(client);
//     function urlFor(source) {
//         return builder.image(source);
//     }
//     return (
//         <div>
//             <Layout>
//                 <div className='p-20'>
//                     {
//                         course.map((item, ind) => {
//                             {
//                                 return (
//                                     <div className={` shadow-2xl shadow-slate-500 py-4 px-8 my-4 ${colorGradients[ind]} text-white`} key={ind}
//                                     >
//                                         <h1 className='font-semibold mb-4 text-2xl'>{item.title}</h1>
//                                         <hr />
//                                         <PortableText
//                                             content={item.content}
//                                             serializers={{
//                                                 types: {
//                                                     code: (props) => (
//                                                         <pre data-language={props.node.language}>
//                                                             <code>{props.node.code}</code>
//                                                         </pre>
//                                                     ),
//                                                 },
//                                             }}
//                                         />
//                                     </div>
//                                 )
//                             }
//                         })
//                     }
//                 </div>

//             </Layout>

//         </div>
//     )
// }
// export async function getServerSideProps(context) {
//     const client = createClient({
//         projectId: "10usolyp",
//         dataset: "production",

//     });
//     const query = `*[_type == "admissions"]`;
//     const query2 = `*[_type == "course"]`;
//     const admissions = await client.fetch(query);
//     const course = await client.fetch(query2);
//     return {
//         props: {
//             admissions, course
//         },
//     };
// }


// export default index


//import React from 'react'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import PortableText from "react-portable-text"
import { useRouter } from 'next/router'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Laptop, Brain, Network, TrendingUp } from 'lucide-react'

const index = ({ course, admissions }) => {
    const router = useRouter()
    const id = router.query.id

    const client = createClient({
        projectId: "10usolyp",
        dataset: "production",
    });
    const builder = imageUrlBuilder(client);
    function urlFor(source) {
        return builder.image(source);
    }

    const containerRef = useRef(null)
    const [activeSection, setActiveSection] = useState(0)

    const courses = [
        {
            id: 'cs',
            title: "Computer Science",
            icon: Laptop,
            color: "from-blue-500 to-blue-700",
            description: "Dive deep into algorithms, data structures, and software engineering.",
            highlights: [
                "Advanced algorithms and data structures",
                "Software architecture and design patterns",
                "Distributed systems and cloud computing",
                "Computer graphics and visualization"
            ],
            careers: ["Software Engineer", "Systems Architect", "Full-Stack Developer", "DevOps Engineer"]
        },
        {
            id: 'csai',
            title: "CS & Artificial Intelligence",
            icon: Brain,
            color: "from-purple-500 to-purple-700",
            description: "Explore cutting-edge AI and machine learning technologies.",
            highlights: [
                "Machine learning and deep neural networks",
                "Natural language processing and understanding",
                "Computer vision and image recognition",
                "Robotics and autonomous systems"
            ],
            careers: ["AI Researcher", "Machine Learning Engineer", "Data Scientist", "AI Ethics Specialist"]
        },
        {
            id: 'it',
            title: "Information Technology",
            icon: Network,
            color: "from-green-500 to-green-700",
            description: "Master practical applications of technology in business contexts.",
            highlights: [
                "Network security and cybersecurity",
                "Cloud computing and virtualization",
                "IT project management and ITIL",
                "Database administration and big data"
            ],
            careers: ["IT Manager", "Network Administrator", "Cybersecurity Analyst", "Cloud Architect"]
        },
        {
            id: 'csb',
            title: "CS & Business",
            icon: TrendingUp,
            color: "from-orange-500 to-orange-700",
            description: "Blend technical expertise with business acumen for tech-driven success.",
            highlights: [
                "Business analytics and data-driven decision making",
                "E-commerce and digital transformation",
                "IT strategy and governance",
                "Tech entrepreneurship and innovation"
            ],
            careers: ["Technology Consultant", "Product Manager", "Business Analyst", "Tech Entrepreneur"]
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            const windowHeight = window.innerHeight
            const newActiveSection = Math.floor(scrollPosition / windowHeight)
            setActiveSection(newActiveSection)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const { scrollYProgress } = useScroll({ target: containerRef })

    return (
        <div className="relative">
            <Layout>
            {/* <nav className="fixed top-96 right-0 z-50 p-4">
                <ul className="flex flex-col gap-2">
                    {courses.map((course, index) => (
                        <li key={course.id}>
                            <Button
                                variant={activeSection === index ? "default" : "outline"}
                                size="icon"
                                onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
                                aria-label={`Scroll to ${course.title}`}
                            >
                                <course.icon className="h-4 w-4" />
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav> */}
            {courses.map((course, index) => {
                const yRange = [index * 100, (index + 1) * 100]
                const opacity = useTransform(scrollYProgress, yRange, [0, 1])
                const scale = useTransform(scrollYProgress, yRange, [0.8, 1])
                return (
                    <motion.section
                        key={course.id}
                        className={`py-8 flex items-center justify-center px-8 bg-gradient-to-br  `}
                    >
                        <Card className="w-full overflow-hidden text-black h-96">
                            <CardContent className="p-0">
                                <motion.div className="grid md:grid-cols-2  " style={{ scale }}>
                                    <div>
                                        <course.icon className="h-16 w-16 mb-4" />
                                        <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
                                        <p className="text-muted-foreground mb-6">{course.description}</p>
                                        <div className="space-y-2">
                                            {course.careers.map((career, careerIndex) => (
                                                <Badge key={careerIndex} variant="secondary">{career}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Program Highlights</h3>
                                        <ul className="space-y-4">
                                            {course.highlights.map((highlight, highlightIndex) => (
                                                <li key={highlightIndex} className="flex items-start">
                                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium mr-3">
                                                        {highlightIndex + 1}
                                                    </span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.section>
                )
            })}
            </Layout>
        </div>
    )
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "10usolyp",
        dataset: "production",
    });
    const query = `*[_type == "admissions"]`;
    const query2 = `*[_type == "course"]`;
    const admissions = await client.fetch(query);
    const course = await client.fetch(query2);
    return {
        props: {
            admissions, course
        },
    };
}

export default index
