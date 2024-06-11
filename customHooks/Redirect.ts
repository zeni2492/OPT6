export const useRedirect = (rout: string | number) => {
    if (rout) {
        window.location.href = String(`/SliderPages/` + rout);
    }
}