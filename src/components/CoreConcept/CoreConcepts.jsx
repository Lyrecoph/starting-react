import CoreConcept from './CoreConcept.jsx';
import {CORE_CONCEPTS} from '../../data.js';
import Section from '../Section.jsx';

// Nous avons procèdé ainsi parce que les composants gèrent plusieurs fonctionnalités
export default function CoreConcepts(){
    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept
                    key={conceptItem.title} {...conceptItem} 
                /> )}
            </ul>
        </Section>
    );
}