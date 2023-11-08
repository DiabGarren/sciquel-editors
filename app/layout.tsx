import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sciquel Editors",
    description: "Article editor page for Sciquel.org",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="grid grid-cols-3 bg-teal px-[15px]">
                    <div className="flex h-[100%] items-center">
                        <svg
                            className="h-[45%] mr-[25px]"
                            style={{ overflow: "visible" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="63"
                            height="55"
                            viewBox="0 0 63 55"
                            fill="none">
                            <path
                                d="M3 3H60M3 27.5H60M3 52H60"
                                stroke="white"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg
                            className="h-[50%]"
                            style={{ overflow: "visible" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="54"
                            height="59"
                            viewBox="0 0 54 59"
                            fill="none">
                            <path
                                d="M50.7586 56.2692L39.6226 41.5743M39.6226 41.5743C35.7368 45.0039 30.6327 47.0849 25.0424 47.0849C12.8687 47.0849 3 37.2161 3 25.0424C3 12.8687 12.8687 3 25.0424 3C37.2161 3 47.0849 12.8687 47.0849 25.0424C47.0849 31.6259 44.1987 37.5353 39.6226 41.5743Z"
                                stroke="white"
                                strokeWidth="8"
                                strokeLinecap="round"
                            />
                        </svg>
                        <input
                            className="bg-[transparent] text-white h-[50%] text-[1.2em] border-b-2 placeholder:text-white"
                            placeholder="Search"
                        />
                    </div>
                    <a
                        className="flex h-[100%] items-center justify-center"
                        href="/">
                        <svg
                            className="h-[100%] w-[40px] mx-[5px]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="256"
                            height="212"
                            viewBox="0 0 256 212"
                            fill="none">
                            <path
                                d="M155.826 78.638C155.826 35.6078 120.943 0.724976 77.913 0.724976C34.8829 0.724976 0 35.6078 0 78.638C0 121.668 34.8829 156.551 77.913 156.551C89.2463 156.551 100.014 154.131 109.729 149.78C100.052 128.7 92.3904 113.207 77.913 89.7684C106.207 101.5 121.235 114.786 135.782 130.808C148.241 116.996 155.826 98.703 155.826 78.638Z"
                                fill="white"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M134.493 176.957C138.129 176.755 140.305 176.437 144.696 175.102C141.636 181.178 137.251 183.249 120.58 182.522C106.855 194.457 95.0545 200.533 61.2174 211.276C71.0678 210.072 79.3553 209.863 86.657 209.679C103.278 209.26 114.791 208.971 128 197.363C128.858 199.755 122.6 207.363 120.58 209.421C119.904 210.053 119.625 210.287 119.652 210.348C119.678 210.407 119.993 210.301 120.58 210.348C120.147 210.401 132.061 209.286 135.42 206.638C135.659 206.45 135.822 206.57 136.181 206.853C138.945 208.89 142.435 209.381 156.754 208.493C164.471 208.015 171.954 202.441 171.594 202C182.015 192.666 186.674 186.646 192.464 174.638C199.284 162.009 203.822 155.964 213.333 147.276C227.395 137.715 236.801 133.502 256 127.797C244.115 129.88 237.718 131.384 226.319 134.29C218.466 135.7 214.612 136.083 213.333 134.29C209.239 128.497 205.296 127.036 194.783 126.87C179.692 126.115 172.574 133.887 161.211 146.296C155.277 150.423 152.019 150.334 146.551 146.348C142.08 139.552 139.792 136.254 135.782 130.808C128.56 138.814 119.699 145.314 109.729 149.78C111.611 153.881 113.57 158.192 115.669 162.815L115.672 162.821L115.674 162.824C116.657 164.99 117.672 167.224 118.725 169.537C118.955 169.782 119.178 170.022 119.397 170.256C123.202 174.342 125.532 176.843 134.493 176.957ZM199.42 141.71C197.609 141.71 196.638 139.811 196.638 138C196.638 136.189 197.609 134.29 199.42 134.29C201.231 134.29 202.203 136.189 202.203 138C202.203 139.811 201.231 141.71 199.42 141.71Z"
                                fill="white"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M200.348 119.45C200.348 119.427 200.348 119.404 200.348 119.381C200.386 119.397 200.387 119.42 200.348 119.45Z"
                                fill="white"
                            />
                            <path
                                d="M196.638 91.6235C196.04 104.966 196.477 109.566 178.087 125.015C185.617 121.197 199.624 119.077 200.348 119.381C200.332 108.39 201.625 102.055 196.638 91.6235Z"
                                fill="white"
                            />
                        </svg>
                        <h1 className={`${quicksand.className} text-white font-[700]`}>SCIQUEL</h1>
                    </a>
                </header>
                {children}
            </body>
        </html>
    );
}
