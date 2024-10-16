import { useState } from 'react';

const OrderSelect = ({ perfumes }) => {
    const [sortOrder, setSortOrder] = useState('a-z');
    const sortedPerfumes = [...perfumes].sort((a, b) => {
        switch (sortOrder) {
            case 'a-z':
                return a.nombre.localeCompare(b.nombre);
            case 'price-asc':
                return a.precio - b.precio;
            case 'price-desc':
                return b.precio - a.precio;
            default:
                return 0;
        }
    })

    return (
        <div className="flex flex-col items-center">
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className='mb-5 p-2 border rounded'>
                <option value="a-z">Orden A - Z</option>
                <option value="price-asc">Ordenar de menor a mayor precio</option>
                <option value="price-desc">Ordenar de mayor a menor precio</option>
            </select>

            <section className="w-full max-w-[1000px] selft-center flex flex-wrap gap-5">
                {sortedPerfumes.map((perfume) => (
                    <article className="w-[250px] bg-slate-400 rounded-lg" key={perfume.path}>
                        <a href={perfume.path}>
                            <img src={perfume.imagen} alt={perfume.nombre} />
                            <div>
                                <h2>{perfume.nombre}</h2>
                                <p>{perfume.descripcion}</p>
                                <p>{perfume.version}</p>
                                <p>{perfume.tamaño}</p>
                                <p>{perfume.precio}</p>
                            </div>
                        </a>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default OrderSelect;