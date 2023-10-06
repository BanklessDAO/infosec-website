import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import imageBogdrakonov from '@/images/team/bogdrakonov.png'
import imageDysan from '@/images/team/dysan.png'
import imageDownlore from '@/images/team/downl0re.jpeg'
import imageTonyStark from '@/images/team/tony-stark.jpg'
import imageStackthat from '@/images/team/stackthat-eth-2.png'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Code, collaborate, conquer the cutting edge"
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyality" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We don’t care when our team works just as long as they are working
            every waking second.
          </GridListItem>
          <GridListItem title="Collaboration" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  // {
  //   title: 'Leadership',
  //   people: [
  //     {
  //       name: 'Leslie Alexander',
  //       role: 'Co-Founder / CEO',
  //       image: { src: imageLeslieAlexander },
  //     },
  //     {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       image: { src: imageMichaelFoster },
  //     },
  //     {
  //       name: 'Dries Vincent',
  //       role: 'Partner & Business Relations',
  //       image: { src: imageDriesVincent },
  //     },
  //   ],
  // },
  {
    title: 'Team',
    people: [
      {
        name: 'BogDrakonov',
        role: 'InfoSec Coordinator',
        image: { src: imageBogdrakonov },
      },
      {
        name: 'Dysan',
        role: 'InfoSec POAP Master',
        image: { src: imageDysan },
      },
      {
        name: 'd0wnlore',
        role: 'InfoSec Educator',
        image: { src: imageDownlore },
      },
      {
        name: 'Tony Stark',
        role: 'InfoSec Engineer',
        image: { src: imageTonyStark },
      },
      {
        name: 'Stackthat.eth',
        role: 'InfoSec Engineer',
        image: { src: imageStackthat },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-white">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="Securing and Scaling the Future of Decentralized Systems"
      >
        <div className="text-gray-400">
          <p>
            We are firm believers in the revolutionary potential of blockchain
            and web3 to transform industries. But we also understand that to
            realize this potential, these emerging technologies require robust
            infosec, development practices, and 24/7 operational support.
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-base">
            <p>
              That&apos;s why our team specializes in providing end-to-end
              information security, DevOps, and site reliability engineering for
              decentralized networks and applications. We secure web3 systems
              through best-in-class cryptographic expertise, infrastructure
              hardening, and vulnerability management. We optimize development
              with automated testing, deployment, and monitoring pipelines
              tailored for blockchain. And we maintain reliability through
              proactive incident response, capacity planning, and
              around-the-clock operational support.
            </p>
            <p>
              Our integrated offering combines the strengths of information
              security, DevOps, and SRE to enable the possibility of web3. We
              partner with trailblazing teams and projects to turn innovative
              ideas into production-ready systems poised for real-world impact.
              Together, we can drive the evolution of decentralized technologies
              securely into the future.
            </p>
          </div>
        </div>
      </PageIntro>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our experts share insider perspectives on projects, progress and the future of tech - read our team's candid discussions and cutting-edge insights on the organization blog."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
