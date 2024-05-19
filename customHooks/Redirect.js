
export default function useRedirect() {
    const redirectToPage = (index) => {
        if (index === 0) {
            window.location.href='/licensePage';
        } else {
            window.location.href='/EmptyPage';
        }
    };

    return {
        redirectToPage,
    };
}