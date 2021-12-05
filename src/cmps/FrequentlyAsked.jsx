import React from 'react'
import data1 from '../util/data1'
import data2 from '../util/data2'
import { Question } from './Question'

export const FrequentlyAsked = () => {
    return (
        <section className="fqa">
            <h3>שאלות ותשובות</h3>
            <div className="questions-container flex space-between">
                <ul>
                    {
                        data1.map(q=> (
                            <Question key={q.id} {...q}/>
                            ))
                    }
                </ul>
                <ul>
                    {
                        data2.map(q=> (
                            <Question key={q.id} {...q}/>
                            ))
                    }
                </ul>
            </div>
        </section>
    )
}
