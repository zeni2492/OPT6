
export default function useRedirect() {
    const redirectToPage = (index) => {
        if (index === 'Лицензионный договор') {
            window.location.href='/licensePage';
        } else {
            window.location.href='/EmptyPage';
        }
    };

    return {
        redirectToPage,
    };
}