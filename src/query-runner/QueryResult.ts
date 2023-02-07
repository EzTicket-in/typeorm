/**
 * Result object returned by UpdateQueryBuilder execution.
 */
export class QueryResult {
    /**
     * Raw SQL result returned by executed query.
     */
    raw: any

    /**
     * Rows
     */
    records: any[] = []

    /**
     * Number of affected rows/documents
     */
    affected?: number
}
