import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import { Work } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

const settings: Settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
};

type Props = {
  work: Work & {
    description: string;
    images: string[];
    publishedAt: string;
    previewUrl: string;
    videos: string[];
    featureList: string[];
    attributes: { name: string; value: string }[];
  };
};

const WorkDetail: React.FunctionComponent<Props> = ({ work }) => {
  const router = useRouter();
  return (
    <AppLayout title="Project Detail">
      <div className="container">
        <div className="mt-24 flex flex-col items-center justify-center">
          {/* Back Button */}
          <button
            onClick={() => router.push('/#projects')}
            className="mb-6 self-start rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition duration-300 hover:bg-primary-500 hover:text-white"
          >
            ← Back to Projects
          </button>
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{work.title}</h1>
          <p className="mt-4 flex items-center text-gray-400">
            <span>{work.publishedAt}</span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{work.category}</span>
          </p>
        </div>
        {/* <div className="mt-10">
          <Slider {...settings}>
            {work.images.map((image, index) => (
              <div className="overflow-hidden rounded-xl" key={index}>
                <Image src={image} height={720} width={1280} layout="responsive" alt={work.title} />
              </div>
            ))}
          </Slider>
          <video
            width="100%" // Full width of the container
            height="auto"
            controls
            autoPlay // Optional: if you want it to autoplay
            loop // Optional: if you want it to loop
            muted // Optional: if you want it to play muted
          >
            <source src={work.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mt-6 flex justify-center">
            <Link href={work.previewUrl}>
              <a className="btn">Live Preview</a>
            </Link>
          </div>
        </div> */}

        <div className={`mt-10 grid gap-10 ${work.videos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          {/* First Video */}
          {work.videos[0] && (
            <div className="relative w-full h-0 pb-[57%] overflow-hidden rounded-xl">
              <video
                width="100%" 
                height="100%"
                controls
                loop
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              >
                <source src={work.videos[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Second Video */}
          {work.videos[1] && (
            <div className="relative w-full h-0 pb-[56.9%] overflow-hidden rounded-xl">
              <video
                width="100%" 
                height="100%"
                controls
                loop
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              >
                <source src={work.videos[1]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        <div className="my-10">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p className="mt-4">{work.description}</p>
          <h3 className="mt-10 text-xl font-semibold">Feature List</h3>
          <ul className="mt-4 list-disc pl-4">
            {work.featureList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="my-10 rounded-lg bg-gray-50 py-3 shadow-md dark:bg-gray-700">
          <table className="w-full">
            <tbody>
              {work.attributes.map((attribute, index) => (
                <tr key={index}>
                  <td className="w-48 px-4 py-2 font-semibold">{attribute.name}</td>
                  <td>{attribute.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="mb-10 flex h-48 flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold">Want to Build a project like this?</h2>
          <p className="mt-4">I can design and develop beautiful websites, apps for you</p>
          <Link href="/contact">
            <a className="mt-5 rounded-full bg-primary-500 px-8 py-2 font-semibold tracking-wide text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
              Start a project
            </a>
          </Link>
        </div> */}
      </div>
    </AppLayout>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const id = context.params?.id as string;
//   const work = works.find((work) => work.id === Number(id));
//   if (work) {
//     return {
//       props: {
//         work,
//       },
//     };
//   }
//   return {
//     notFound: true,
//   };
// };

// Generate static paths for all works
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const paths = works.map((work) => ({
      params: { id: work.id.toString() },
    }));

    return {
      paths,
      fallback: 'blocking', // Use 'blocking' instead of true
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

// Fetch data for a specific project at build time
export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id as string;
    const work = works.find((work) => work.id === Number(id));

    if (!work) {
      return { 
        notFound: true,
        revalidate: 10,
      };
    }

    return {
      props: {
        work: {
          ...work,
          description: work.description || '',
          images: work.images || [],
          publishedAt: work.publishedAt || '',
          previewUrl: work.previewUrl || '',
          videos: work.videos || [],
          featureList: work.featureList || [],
          attributes: work.attributes || [],
        },
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      notFound: true,
      revalidate: 10,
    };
  }
};

export default WorkDetail;
