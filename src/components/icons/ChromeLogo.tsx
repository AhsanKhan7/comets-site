export const ChromeLogo = ({ size = 24 }: { size?: number }) => {
    return (
        <svg width={size} height={size} style={{ background: "#ffffff", borderRadius: "100%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", }} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">

            <ellipse cx="50" cy="50" rx="20" ry="20" fill="#188FD1" />
            <path d="M 8.5,26 A 48,48 0 0 1 91.5,26 L 62,29.5 A 24,24 0 0 0 26,50 z" fill="#EA3939" />
            <path d="M 50,98 A 48,48 0 0 1 8.5,26 L 26,50 A 24,24 0 0 0 62,70.5 z" fill="#4AAE48" />
            <path d="M 91.5,26 A 48,48 0 0 1 50,98 L 62,70.5 A 24,24 0 0 0 62,29.5 z" fill="#FED14B" />
        </svg>
    );
};
