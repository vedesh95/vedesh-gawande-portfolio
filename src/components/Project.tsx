import bookmyshow from "../assets/images/bookmyshow.png";
import codesnip from "../assets/images/codesnip.png";
import converter from "../assets/images/converter.png";
import sorting_vis from '../assets/images/sorting.png';
import sudoku from '../assets/images/sudoku.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://github.com/vedesh95/AudioTap" target="_blank" rel="noreferrer"><img src={converter} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vedesh95/AudioTap" target="_blank" rel="noreferrer"><h2>AudioTap</h2></a>
                <p>A web app for seamless video-to-audio conversion with upload, progress tracking, and download features.</p>
            </div>

            <div className="project">
                <a href="https://github.com/vedesh95/CodeSnip/" target="_blank" rel="noreferrer"><img src={codesnip} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vedesh95/CodeSnip/" target="_blank" rel="noreferrer"><h2>CodeSnip</h2></a>
                <p>A web app for creating, managing, and sharing code snippets with ease.</p>
            </div>

            <div className="project">
                <a href="https://github.com/vedesh95/BooKMyShowLLD" target="_blank" rel="noreferrer"><img src={bookmyshow} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vedesh95/BooKMyShowLLD" target="_blank" rel="noreferrer"><h2>BookMyShow - LLD</h2></a>
                <p>A movie ticket booking system that lets users browse shows, select seats, and make reservations.</p>
            </div>

            <div className="project">
                <a href="https://github.com/vedesh95/Sudoku-Backtracking-Algo-Visualizer" target="_blank" rel="noreferrer"><img src={sudoku} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="hhttps://github.com/vedesh95/Sudoku-Backtracking-Algo-Visualizer" target="_blank" rel="noreferrer"><h2>Sudoku Visualizer</h2></a>
                <p>A Sudoku visualizer that demonstrates the step-by-step solving process of Sudoku puzzles using backtracking.</p>
            </div>
                        
            <div className="project">q
                <a href="https://github.com/vedesh95/sorting-visualizer/tree/main/" target="_blank" rel="noreferrer"><img src={sorting_vis} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/vedesh95/sorting-visualizer/tree/main/" target="_blank" rel="noreferrer"><h2>Sorting Visualizer</h2></a>
                <p>Built a sorting visualizer that animates various working of sorting algorithms step by step</p>
            </div>

        </div>
    </div>
    );
}

export default Project;