

export default function OvejasList({count}) {
    const url = 'http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png';

    return(
        <div>
        {Array.from({ length: count }).map((_, index) => (
          <img key={index} src={url} alt={`Imagen de feo ${index}`} />
        ))}
      </div>
    );
}