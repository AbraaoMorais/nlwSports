

interface GameBannerProps {
    title: string;
    adsCount: number;
    bannerUrl: string;

}
export default function GameBanner(props: GameBannerProps) {

    const anuncioText = props.adsCount <= 1 ? 'Anúncio': 'Anúncios';

  return (

    <a href="" className="relative rounded-lg overflow-hidden">
        <img src={props.bannerUrl} alt="" />
        <div className="w-full pt-166 pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white">{props.title}</strong>
            <strong className="text-zinc-300 text-sm block">{props.adsCount} {anuncioText}</strong>
        </div>
    </a>
  )
}
