import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-tilte";

import "./experience.scss";

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>
                
            </p>
            <div className="experience-time">
                <div className="experience-language">
                    <Image
                        src="/react.png"
                        alt="React Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 level</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/ts.png"
                        alt="TypeScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                        <span>2 level</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/node-js.png"
                        alt="Node.JS Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                        <span>2 level</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/mysql.png"
                        alt="MySQL Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                        <span>2 level</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/js.png"
                        alt="JavaScript Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                        <span>3 level</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/java.png"
                        alt="Java Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                        <span>3 level</span>
                        </div>
                    </div>
                </div>

                <div className="experience-language">
                    <Image
                        src="/C.png"
                        alt="C Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                        <span>3 level</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
