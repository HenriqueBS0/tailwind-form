export default function Input({ type, placeholder }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="border border-slate-300 mb-4 w-full h-12 rounded-md pl-4 outline-none"
        />
    );
}