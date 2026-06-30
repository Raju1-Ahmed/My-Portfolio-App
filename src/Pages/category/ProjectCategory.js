import React, { useState, useEffect } from 'react';
import { faFileCode, faLink, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PROJECT_CATEGORIES } from '../utils/constants';
import { apiRequest } from '../utils/api';
import './ProjectCategory.css';

const ProjectCategory = () => {
    const [activeTab, setActiveTab] = useState('FullStack');
    const [products, setProducts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const fetchProducts = async () => {
            try {
                const response = await apiRequest({ url: '/projects' });
                if (cancelled) return;
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                if (cancelled) return;
                setDataLoaded(true);
            }
        };

        fetchProducts();

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (dataLoaded && products.length === 0) {
            const retryTimer = setTimeout(() => {
                setDataLoaded(false);
                apiRequest({ url: '/projects' })
                    .then((response) => setProducts(response.data))
                    .catch((error) => console.error('Error fetching products:', error))
                    .finally(() => setDataLoaded(true));
            }, 3000);

            return () => clearTimeout(retryTimer);
        }

        return undefined;
    }, [dataLoaded, products.length]);

    const filteredProducts = products.filter((product) => product.futureField === activeTab);

    return (
        <section id='portfolio' className="section-shell section-block">
            <div className="section-heading">
                <span className="eyebrow">Projects</span>
                <h2>Selected work grouped by project type so the portfolio is easier to browse.</h2>
                <p>
                    Each card shows the stack focus, latest update date, short summary, and links to the live demo plus source code.
                </p>
            </div>

            <div className="project-tabs">
                {PROJECT_CATEGORIES.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`project-tab ${activeTab === category ? 'project-tab--active' : ''}`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {!dataLoaded ? (
                <div className="empty-state">Loading projects...</div>
            ) : filteredProducts.length === 0 ? (
                <div className="empty-state">No projects found for this category yet.</div>
            ) : (
                <div className="project-grid">
                    {filteredProducts.map((product) => (
                        <article className="project-card" key={product._id}>
                            <div className="project-card__media">
                                <video src={product.video?.filePath} controls muted playsInline preload="metadata" />
                            </div>
                            <div className="project-card__body">
                                <div className="project-card__meta">
                                    <span>{product.futureField}</span>
                                    <span>{new Date(product.date).toLocaleDateString()}</span>
                                </div>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <div className="project-card__links">
                                    <a href={product.clientURL} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faFileCode} /> Client
                                    </a>
                                    <a href={product.serverURL} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faServer} /> Server
                                    </a>
                                    <a href={product.demoURL} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLink} /> Demo
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectCategory;
