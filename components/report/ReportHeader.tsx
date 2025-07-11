export const ReportHeader = ({
    title,
    productName,
    date
}: {
    title: string;
    productName: string;
    date: string;
}) => {
    return (
        <header className="text-center py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            <div className="flex justify-center items-center gap-4 text-gray-600">
                <span>Product: {productName}</span>
                <span>•</span>
                <span>Date: {date}</span>
            </div>
        </header>
    );
  };