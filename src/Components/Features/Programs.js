import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
} from '@heroicons/react/outline'
import { MailIcon } from '@heroicons/react/solid'
const programs = [
    {
        name: 'Cardio Kickboxing',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CloudUploadIcon,
    },
    {
        name: 'Brazillian Jiu-Jitsu',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: LockClosedIcon,
    },
    {
        name: 'Mixed Martial Arts',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: RefreshIcon,
    },
    {
        name: 'Boxing',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Muay Thai',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CogIcon,
    },
    {
        name: 'Kids Programs',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function Programs() {
    return (
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">OUR PROGRAMS</h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Go Further Than You Ever Thought!
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    Start a journey you'll never regret! We have programs for men, women, and children ages 4 and up.
                    Our curriculum covers fitness and self-defense. We also have a heavy interest in sport/competition style martial arts!
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {programs.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-6">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>

                                        <button
                                            type="button"
                                            className="m-1 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Learn More
                                            <MailIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
