
import './App.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className="App">
      <Container maxWidth="md" 
      sx={{
        '& > :not(style)': {
          m: 4,
          p:4
        },
      }}>
      
      <Paper elevation={3} >
          <div className="title">
          Cinema Lucida: <br/><span className={"titlesub"}>Exploring the Punctum in moving images</span>
          </div>
          {/* <img src={flowchart} className="flowchart" alt="logo" /> */}
          <p className="content">
          Robert Barthes’ Camera Lucida makes a unique mark in the world of photography and visual art through the author's passionate claims about the analysis, critique, and embodiment of the photographic medium. In one of the most influential studies of photography, Barthes doesn’t explore the technical or hermeneutic role of photography, but rather gives a personal classification of photography and photographs (Dillon, 2011). One of the most impactful concepts he introduces is the theory of a Punctum and Studium in photography. The studium represents the ostensible subject or context of a given photograph while the punctum is defined as a specific detail or element in a photograph that "pricks" or "stings" the viewer, capturing their attention in a particularly powerful way. According to Barthes, the punctum is not simply a visual element, but rather a feeling or emotional response that is triggered by a visual element.
          <br/><br/>
          Barthes’ relationship with photography and cinema plays an important role in his book. He does not shy away from the fact that he personally privileges photography over cinema (Badmington 2012, p.307). Even in the opening paragraph of Camera Lucida, Barthes states:
          <br/><br/>
          {/* QUOTE */}
          <p className="quote">
          ‘I decided I liked Photography against cinema, from which I nonetheless failed to separate it. This question grew insistent. I was overcome by an “ontological” desire: I wanted to learn at all costs what Photography was “in itself ”, by what essential feature it was to be distinguished from the community of images.’ (Barthes 1981, p.3)
          </p>
          <br/><br/>
          Camera Lucida consciously chooses to focus purely on the punctum of the photograph but not a cinematic punctum. Moving images, just like their static counterparts have the ability to ‘prick’ or ‘wound.’ There surely exists a cinematic punctum, albeit much different than what Barthes defines a punctum for the photograph as. In its essence, Barthes’ terminology of a punctum can be identified if it fulfills these three conditions:
          <br/><br/>
          {/* LIST */}
          <ol>
          <li>Punctum is an element of the image or detail that shoots out and ‘wounds’ you</li>
          <li>The Punctum is only revealed after the fact when the photograph is no longer in front of the viewer and the viewer is allowed to process it on their own</li>
          <li>Punctum has more or less a power of expansion. It is a form of an addition to the photograph.</li>
          </ol>
          <br/><br/>
          By analyzing these three conditions through a cinematic lens, we can classify what a punctum for the moving audiovisual image would look like. The concept of a cinematic punctum and its ability to evoke emotions becomes extremely critical when movies are seen as philosophical objects with direct relations to society. In an environment increasingly saturated with media, a cinematic punctum can help focus the film’s impact on the relationship between media and societal evolution. 
          <br/><br/>
          </p>
          <p className="sub-heading">
            {/* SUBHEADING */}
            1. The Wound
          </p>
          <p className="content">
          Even though the foundations of the moving image are based on the photograph itself, the mediums of cinema and photography aren’t as connected as they might seem. Using Barthes’ theories can be extremely hard when 24 images are displayed to the viewer every second. Cinema even has an added dimension of sound which further complicates its analysis and appreciation. Barthes does not forget to comment on cinema’s fast-paced quality in comparison to a single photograph:
          <br/><br/>
          {/*QUOTE*/}
          <p className="quote">
          “Do I add to the images in movies? I don’t think so; I don’t have time: in front of the screen, I am not free to shut my eyes; otherwise, opening them again I would not discover the same image; I am constrained to a continuous voracity; a host of other qualities, but not pensiveness; whence the interest, for me, of the photogram.”
          </p>
          <br/><br/>
          Barthes’ feelings on the moving image are lucid but I cannot completely agree with this argument being a reason for movies not having a punctum. Barthes defines punctum as something sudden, comparing it to an arrow being shot and pricking you. If the punctum has such a lightning quality as Barthes suggests, then the speed of frames shouldn’t be enough to hide this powerful element from the movie. 
          <br/><br/>
          However, I can agree with Bartes in the fact that cinema takes much more space within the same temporality as a single photograph. With multiple images being displayed, no single image can have privilege over the others in terms of the duration it is shown. Thus, a key element in cinema is not only the multiple images but what lies between them too (Jenkins 2013, p.578). The essence of a cinematic punctum allows us to highlight what Mark Hansen terms the relationship between phenomenology and materiality (297). The punctum gives a specific element a sudden added weight, making it stand out from every other element in the medium. It shadows the materiality of frames being projected at a constant speed by giving a spotlight to the phenomenon of the punctum itself. 
          <br/><br/>
          A cinematic punctum doesn’t need to be a part of a frame within the movie. In fact, I’ve never felt a punctum from such an element. Rather, I’ve felt moved by elements such as a certain frame itself, a piece of music, a dialogue, an action, or even a cut. Barthes states a punctum can be found in an element within the photographic medium. Similarly, a cinematic punctum can be an element within the medium, whatever it may be. With so many dimensions and sub-mediums within cinema, there is more variety of elements to be wounded from.
          <br/><br/>
          </p>
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/ZUOJ_s8xP_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          {/* END OF PART 1 */}
          
          <p className="sub-heading">
            {/* SUBHEADING */}
            2. The Reveal
          </p>
          
          <p className="content">
          A secondary characteristic of the punctum that Barthes mentions is the fact that the punctum can only be revealed when the photograph is no longer in front of the viewer and they can think back on it. In a way, this claim contradicts Barthes’ abovementioned views on cinema and how its ever-changing photographic nature does not allow for a punctum to exist. A moment in a film will never come back. The movement of cinema is synonymous with time. This nature should in fact allow for a punctum to wound the viewer more easily. It is intriguing to think about this ‘engagement time’ with the cinematic medium. Compared to photographs, one has a much shorter engagement time with elements within the movie. On the other hand, the viewer actively engages with a movie for much longer than they would with a single photograph. Thus, an element powerful enough to wound you can be noticed when you’re done interacting with it, but not the larger form of media as a whole. Unlike a photographic punctum, a cinematic punctum can be revealed while you’re still watching the movie thereby also having an impact on the experience of the movie from then on as well.
          <br/><br/>
          </p>
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/u_mc0EvwoQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          {/* END OF PART 2*/}

          <p className="sub-heading">
            {/* SUBHEADING */}
            3. The Addition
          </p>
          
          <p className="content">
          The final condition in identifying a punctum deals with the ability of a punctum to add to the photograph. Stating it as a “power of expansion,” Barthes suggests that a punctum can animate the photograph, giving life to the image by adding a certain dimensionality. However, what happens if the image is already animated? For a cinematic punctum, the creation is slightly less pensive in this regard. Barthes states that anyone shown on the cinema screen continues to live on as a “blind field constantly doubles our partial vision.” The presence of the cinematic space allows for its punctum to not necessarily be an addition. With diegetic elements, a punctum is never created but realized. As discussed in the previous section, if a punctum is identified during the viewer is interacting with the medium, it can impact their experience from that moment on. Thus, this realization enhances the blind field and gives a spotlight to elements now beyond the screen. 
          <br/><br/>
          At times, a cinematic punctum can still be an addition, however. Part of a non-diegetic soundtrack, for example, does not exist in the cinematic space and making it a punctum gives it the life to have agency in this blind space. According to Barthes, a punctum leads to the beginning of an adventure. A cinematic punctum does the same, but it is often realized and not created.
          <br/><br/>
          </p>
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/u6M_64h-zFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          {/* END OF PART 3*/}
          
          <p className="sub-heading">
            {/* SUBHEADING */}
            Conclusion
          </p>
          <p className="content">
            Altogether, the existence of a cinematic punctum is not a new discovery, nor a shocking one as such. However, it is important to highlight how different it is from the photographic punctum. Barthes’ punctum is an element within the photograph that has the ability to wound, is only revealed once the photograph is no longer in front of the viewer, and creates an addition to the world of the image. The cinematic punctum, on the other hand, is any element under the umbrella of a movie, that can be revealed while the viewer is still experiencing the film, and need not create an addition to the cinematic space. The crucial role of a punctum to have the lightning-like tendency to prick the viewer and bother them continues to be present no matter what the medium might be.
          </p>
          <Divider/>
          <br/><br/>
          WORKS CITED
          <p className="content">
          Badmington, N. (2012). punctum saliens: Barthes, mourning, film, photography. Paragraph, 35(3), 303–319. https://doi.org/10.3366/para.2012.0061
          <br/><br/>
          Barthes, R. (1981). Camera lucida: Reflections on photography (1st American ed). Hill and Wang.
          <br/><br/>
          Dillon, B. (2011, March 26). Rereading: Camera lucida by Roland barthes. The Guardian. https://www.theguardian.com/books/2011/mar/26/roland-barthes-camera-lucida-rereading
          <br/><br/>
          Hansen, M. B. N. (2006). Media theory. Theory, Culture and Society, 23(2–3), 297–306. https://doi.org/10.1177/026327640602300256
          <br/><br/>
          Jenkins, E. S. (2013). Another punctum: Animation, affect, and ideology. Critical Inquiry, 39(3), 575–591. https://doi.org/10.1086/670046
          <br/><br/><br/><br/>
          </p>
          WORKS USED
          <p className="content">
          Clifford , C. (1854). The Alhambra (Grenada) [Captured on Film].
          <br/><br/>
          Reggio, G. (Director). (1983, April 27). Koyaanisqatsi. Island Active.
          <br/><br/>
          Lee, S. (Director). (1989, June 30). Do The Right Thing. Universal Pictures.
          <br/><br/>
          Tykwer, T. (Director). (1998, August 20). Run Lola Run (German: Lola rennt) . Prokino Filmverleih.
          <br/><br/><br/><br/>
          </p>
          <p className="footer">
            FILMEDIA 6 - Final Project || Aditeya Shukla || Professor Shane Denson, Martabel Wasserman
          </p>
        </Paper>
      
      </Container>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
