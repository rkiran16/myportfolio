import ProfileImage from '../components/ProfileImage';
import Skills from '../components/Skills';
import Social from '../components/Social';
import Work from '../Work';

export const SkillSet = [
  'react',
  'react-native',
  'js',
  'html5',
  'css3',
  'sass',
  'node-js',
  'python',
  'vuejs',
  'git',
  'figma',
  'aws',
  'bootstrap',
];

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <div class="card rounded-4 neo">
            <div class="card-body row">
              <div className="col-md-12 col-lg-4 align-content-center">
                <div className="d-flex justify-content-center p-4 shadow-inset">
                  <ProfileImage />
                </div>
              </div>
              <div className="col-md-12 col-lg-8 py-4 d-flex flex-column align-items-between h-100 justify-content-between">
                <div>
                  <p className="text-align-justify lh-md">
                    Hello! My Name is{' '}
                    <span className="text-orange fw-bold">
                      Ravi Kanculakunta
                    </span>{' '}
                    , I like to build things that live on internet. I
                    started my career as a Adobe Flex Developer then
                    transitioned into web development by learning
                    HTML, JS & CSS.
                  </p>
                  <p className="text-align-justify lh-sm">
                    Currently, I work as a Sr Front-End Developer at{' '}
                    <span className="fw-bold">IBM IX</span> making
                    meaningful contributions to teams of varying size
                    and scope . I'm passionate about learning and
                    development with desire to apply skills on a
                    larger development team. Eager to tackle more
                    complex problems and continue to find ways to
                    maximize user efficiency.
                  </p>
                </div>
                <h4 className="mt-4">Tech Stack</h4>
                <Skills skills={SkillSet} />
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Work />
    </div>
  );
};

export default Home;
