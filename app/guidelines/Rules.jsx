'use client'

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"
import Loading from '../../components/loading'

export default function Rules() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />
  return (
    <div className="min-h-screen bg-zinc-950 text-gray-300">
      {/* Header */}
      <div className="bg-zinc-950 backdrop-blur-lg text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-gray-700 text-white">AI for Real World Impact</Badge>
          <img
            src="/nexhacklogo.png"
            alt="NexHack logo"
            className="w-[200px] md:w-[300px]  max-w-full h-auto mx-auto"
          />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Official Guidelines</p>
          <p className="text-gray-400 mt-2">24-Hour Innovation Challenge</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Welcome */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-gray-300">
            Welcome, <strong className="text-white">innovators</strong>! To ensure a fair, competitive, and enjoyable
            event for everyone, all participants and teams must adhere to the following rules.
          </p>
        </div>

        {/* Section 1: General Rules */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">1. General Rules</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Duration</h3>
              <p className="text-gray-300 leading-relaxed">
                The hackathon will run continuously for <strong className="text-white">24 hours</strong>. The official
                start and end times will be announced at the opening ceremony.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Objective</h3>
              <p className="text-gray-300 leading-relaxed">
                To develop a <strong className="text-white">working prototype</strong> that addresses the chosen problem
                statements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Eligibility</h3>
              <p className="text-gray-300 leading-relaxed">
                The hackathon is open to <strong className="text-white">all students</strong> of any college or
                university.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gray-950" />

        {/* Section 2: Team Formation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">2. Team Formation</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
              <p className="text-gray-300 leading-relaxed">
                Teams must consist of a <strong className="text-white">minimum of 2</strong> and
                <strong className="text-white"> maximum of 5 members</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Registration</h3>
              <p className="text-gray-300 leading-relaxed">
                All team members must be <strong className="text-white">officially registered</strong> for the hackathon
                before it commences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Team Composition</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong className="text-white">Cross-disciplinary teams</strong> are encouraged but not mandatory.
              </p>
              <div className="bg-red-900/20 border-l-4 border-red-700 p-4">
                <p className="text-red-400 font-medium">
                  ⚠️ No changes to team members are allowed after the hackathon has officially started.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Section 3: Problem Statements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">3. Problem Statements</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Selection</h3>
              <p className="text-gray-300 leading-relaxed">
                Teams are required to work on <strong className="text-white">one problem statement</strong>, chosen from
                the given list or <strong className="text-white">self-defined</strong>, provided it fits the hackathon's
                main theme.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Commitment</h3>
              <p className="text-gray-300 leading-relaxed">
                Teams must <strong className="text-white">commit to their chosen problem statement</strong> for the
                duration of the hackathon.
                <strong className="text-red-400"> Switching categories mid-way is not permitted</strong>.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Section 4: Development & Code */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">4. Development & Code</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Hacking Period Goal</h3>
              <p className="text-gray-300 leading-relaxed">
                The primary goal is to build a <strong className="text-white">working prototype</strong> during the
                24-hour hackathon period.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Use of Prior Work</h3>

              <div className="mb-4">
                <h4 className="font-semibold text-red-400 mb-2">❌ Not Allowed</h4>
                <p className="text-gray-300 leading-relaxed ml-6">
                  Using project ideas and code from <strong className="text-white">previous hackathons</strong> or
                  <strong className="text-white"> personal projects</strong> is not allowed.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">✅ Encouraged</h4>
                <p className="text-gray-300 leading-relaxed ml-6">
                  The use of <strong className="text-white">open-source libraries</strong>,
                  <strong className="text-white"> frameworks</strong>, and{" "}
                  <strong className="text-white">public APIs</strong> is encouraged.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Section 5: Project Submission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">5. Project Submission</h2>

          <div className="space-y-6">
            <div className="bg-red-900/20 border-l-4 border-red-700 p-4 mb-6">
              <h3 className="font-semibold text-red-400 mb-2">⏰ Deadline - "Code Freeze"</h3>
              <p className="text-red-400">
                A hard deadline for submissions will be announced.{" "}
                <strong>Late submissions will NOT be accepted</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Submission Components</h3>
              <p className="text-gray-300 mb-4">
                Each team must submit the following via the designated submission portal:
              </p>

              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-white">a. Source Code</h4>
                  <p className="text-gray-300">A link to a public code repository (e.g., GitHub, GitLab).</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">b. Project Demo</h4>
                  <p className="text-gray-300">
                    A short video (<strong>max 4 minutes</strong>) demonstrating the project's functionality and
                    explaining the concept.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">c. Presentation</h4>
                  <p className="text-gray-300">
                    A brief presentation/slide deck (<strong>max 15 slides</strong>) outlining the problem, solution,
                    technology used, and future scope.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white">d. README.md File</h4>
                  <p className="text-gray-300">
                    Your repository's README.md must contain a list of all contributions made during the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Section 6: Evaluation Criteria */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">6. Evaluation Criteria</h2>

          <p className="text-gray-300 mb-6">Projects will be assessed based on the following criteria:</p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-gray-600 pl-4">
              <h3 className="font-semibold text-white">1. Innovation & Creativity</h3>
              <p className="text-gray-300">How original and creative is the idea and the new work accomplished?</p>
            </div>

            <div className="border-l-4 border-gray-600 pl-4">
              <h3 className="font-semibold text-white">2. Technical Implementation & Execution</h3>
              <p className="text-gray-300">
                Is the prototype functional? How impressive are the AI techniques and features implemented during the
                hackathon? What is the performance of the models in terms of accuracy or other relevant metrics?
              </p>
            </div>

            <div className="border-l-4 border-gray-600 pl-4">
              <h3 className="font-semibold text-white">3. Real-World Impact & Feasibility</h3>
              <p className="text-gray-300">
                How well does the solution address a real-world need? Is it practical and scalable?
              </p>
            </div>

            <div className="border-l-4 border-gray-600 pl-4">
              <h3 className="font-semibold text-white">4. Team Dynamics & Engagement</h3>
              <ul className="text-gray-300 ml-4 mt-2 space-y-1">
                <li>
                  • <strong>Team Collaboration & Participation:</strong> How well did the team collaborate, divide
                  responsibilities, and maintain consistent participation throughout the hackathon?
                </li>
                <li>
                  • <strong>Learning Attitude & Adaptability:</strong> Did the team show willingness to learn, accept
                  feedback, and adapt their approach when facing challenges?
                </li>
                <li>
                  • <strong>Work Ethic & Consistency:</strong> Did the team remain focused and committed throughout the
                  event?
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-600 pl-4">
              <h3 className="font-semibold text-white">5. Presentation & Demo</h3>
              <p className="text-gray-300">
                How clearly and effectively did the team present their project and its significance?
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-4">Evaluation Process</h3>

          <div className="space-y-6">
            <div className="bg-blue-900/20 border border-blue-800 p-4 rounded">
              <h4 className="font-semibold text-blue-400 mb-2">
                Evaluation Phase I - Preliminary Evaluation by Mentors
              </h4>
              <p className="text-blue-400 mb-2">
                <strong>Total: 50 points</strong>
              </p>
              <p className="text-blue-400 text-sm mb-3">
                Mentors will evaluate all submitted projects based on the first four criteria:
              </p>
              <ul className="text-blue-400 text-sm space-y-1 ml-4">
                <li>
                  • Innovation & Creativity: <strong>15 points</strong>
                </li>
                <li>
                  • Technical Implementation & Execution: <strong>15 points</strong>
                </li>
                <li>
                  • Real-World Impact & Feasibility: <strong>15 points</strong>
                </li>
                <li>
                  • Team Dynamics & Engagement: <strong>5 points</strong>
                </li>
              </ul>
              <p className="text-blue-300 font-semibold text-sm mt-3">
                Based on the scores, the top 10 to 15 teams will be shortlisted for the final round.
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-800 p-4 rounded">
              <h4 className="font-semibold text-purple-400 mb-2">Evaluation Phase II - Final Evaluation by Judges</h4>
              <p className="text-purple-400 mb-2">
                <strong>Total: 100 points</strong>
              </p>
              <p className="text-purple-400 text-sm mb-3">
                Shortlisted teams will be evaluated by a panel of judges based on 1st, 2nd, 3rd, and 5th criteria, with
                25 points assigned to each criterion.
              </p>
              <p className="text-purple-300 font-semibold text-sm">
                The final rankings: Winner, First Runner-up, and Second Runner-up will be determined based on the
                aggregated scores from both Phase I (50 points) and Phase II (100 points), making a total of 150 points.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Section 7: Code of Conduct */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">
            7. Code of Conduct & Ethics
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Respect & Professionalism</h3>
              <p className="text-gray-300 leading-relaxed">
                All participants must maintain a respectful and collaborative environment.
                <strong className="text-red-400">
                  {" "}
                  Harassment, discrimination, or any form of misconduct will not be tolerated and will lead to immediate
                  disqualification
                </strong>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Integrity & Plagiarism</h3>
              <p className="text-gray-300 leading-relaxed">
                All work must be appropriately credited.
                <strong className="text-red-400">
                  {" "}
                  Claiming pre-existing work as something newly created during the hackathon is a form of plagiarism and
                  will result in disqualification
                </strong>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Ethics</h3>
              <p className="text-gray-300 leading-relaxed">
                Teams are expected to consider the <strong className="text-white">ethical implications</strong> of their
                AI solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Ownership</h3>
              <p className="text-gray-300 leading-relaxed">
                All teams retain <strong className="text-white">full ownership</strong> of what they build.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-gray-800" />

        {/* Section 8: Final Provisions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-gray-700">8. Final Provisions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Organizer's Rights</h3>
              <p className="text-gray-300 leading-relaxed">
                The Organizing Committee reserves the right to <strong className="text-white">amend the rules</strong>{" "}
                at any time and to make
                <strong className="text-white"> final decisions</strong> on any disputes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Spirit of the Hackathon</h3>
              <p className="text-gray-300 leading-relaxed">
                The primary goal of this event is to{" "}
                <strong className="text-white">learn, innovate, and have fun</strong>. Compete with sportsmanship and
                collaborate with your teammates.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-700 mt-12">
          <p className="text-gray-400 text-lg">Ready to innovate? Let's build the future together! 🚀</p>
          <p className="text-gray-500 text-sm mt-2">Good luck to all participants in NexHack 1.0</p>
        </div>
      </div>
    </div>
  )
}