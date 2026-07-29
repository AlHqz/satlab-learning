import SatLabLogo from '../../assets/brand-logos/satlab_logo.png';

export const LoadingAnimation = () => {
    return(
        <img
        src={SatLabLogo}
        alt="satlab_logo"
        className="animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-10 items-center inset-0 w-72 h-72 z-10 pointer-events-none"
        />
    )
}