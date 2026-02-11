import { Container, AvatarImg } from "./styles";

interface AvatarProps {
  name: string;
  imageUrl?: string;
}

function Avatar({name, imageUrl}: AvatarProps) {
    // const initialLetter = name[0].toUpperCase();
    const initialLetter = name.charAt(0).toUpperCase();
  return (
    <Container lg>
      {imageUrl ? (
        <AvatarImg 
            src={imageUrl}
            alt={`Imagem de ${name}`}
        />
    ): (
        <span>{initialLetter}</span>
      )}
    </Container>
  );
}

export default Avatar;
