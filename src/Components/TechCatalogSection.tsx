import { useEffect, useState } from "react";
import technologies from "../Data/technologies.json";
import { toast } from "react-toastify";

type Tech = {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
};

const TechCatalogSection = () => {
    const [stack, setStack] = useState<Tech[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);



    const addToStack = (tech: Tech) => {
        if (stack.find((item) => item.id === tech.id)) {
            toast.error(`${tech.name} is already in your stack!`);
            return;
        }
        setStack([...stack, tech]);
        toast.success(`${tech.name} added to stack!`);
    };

    const removeFromStack = (id: string) => {
        setStack(stack.filter((tech) => tech.id !== id));
        toast.info("Technology removed from stack.");
    };

    const clearStack = () => {
        setStack([]);
        toast.warn("All technologies removed.");
    };
    if (loading) {
        return (
            <section className="py-16 text-center">
                <p className="text-gray-600">Loading technologies...</p>
            </section>
        );
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-2">

                
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {technologies.map((tech) => (
                        <div key={tech.id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
                            <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-4" />
                            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mb-2">
                                {tech.badge}
                            </span>
                            <h3 className="text-xl font-semibold">{tech.name}</h3>
                            <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                            <div className="items-center text-sm text-gray-500 mb-2 mt-4 text-center">
                                <h6 className="px-2 py-1 bg-gray-100 rounded">{tech.category}</h6>
                                <h6>{tech.difficulty}</h6>
                                <h6>⭐{tech.rating}</h6>
                            </div>
                            <button
                                onClick={() => addToStack(tech)}
                                disabled={stack.some((item) => item.id === tech.id)}
                                className={`w-full brand-gradient-bg text-white px-6 py-3 rounded-full ${stack.some((item) => item.id === tech.id)
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-linear-to-r from-blue-500 to-purple-600 text-white"
                                    }`}
                            >
                                {stack.some((item) => item.id === tech.id) ? "✓ Added to Stack" : "Add to Stack"}
                            </button>
                        </div>
                    ))}
                </div>

                
                <div className="max-w-75 lg:w-1/4 border rounded-lg p-6 shadow max-h-88 overflow-y-auto">
                    <h2 className="text-xl font-bold mb-4">
                        Your Stack ({stack.length} Technology Selected)
                    </h2>

                    {stack.length === 0 ? (
                        <p className="text-gray-500">No technologies selected yet.</p>
                    ) : (
                        <ul className="space-y-4">
                            {stack.map((item) => (
                                <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                    <div className="flex items-center space-x-3">
                                        <img src={item.icon} alt={item.name} className="h-6 w-6" />
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">{item.category}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromStack(item.id)}
                                        className="text-red-500"
                                    >
                                        ✕
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}

                    {stack.length > 0 && (
                        <button
                            onClick={clearStack}
                            className="mt-6 w-full bg-red-500 text-white py-2 rounded-full"
                        >
                            Remove All
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TechCatalogSection;