let structures = {
    LinkedList: function () {
        function Node(data) {
            this.data = data
            this.next = null
        }

        this.length = 0
        this.head = null

        this.add = function (value) {
            let node = new Node(value),
                currentNode = this.head

            if (!currentNode) {
                this.head = node
                this.length++

                return node
            }

            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = node

            this.length++

            return node
        }

        this.get = function (position) {
            let currentNode = this.head,
                length = this.length,
                count = 1,
                message = { failure: 'Failure: non-existent node in this list.' }

            if (length === 0 || position < 1 || position > length) {
                throw new Error(message.failure)
            }

            while (count < position) {
                currentNode = currentNode.next
                count++
            }

            return currentNode
        }

        this.remove = function (position) {
            let currentNode = this.head,
                length = this.length,
                count = 0,
                message = { failure: 'Failure: non-existent node in this list.' },
                beforeNodeToDelete = null,
                nodeToDelete = null,
                deletedNode = null

            if (position < 0 || position > length) {
                throw new Error(message.failure)
            }

            if (position === 1) {
                this.head = currentNode.next
                deletedNode = currentNode
                currentNode = null
                this.length--

                return deletedNode
            }

            while (count < position) {
                beforeNodeToDelete = currentNode
                nodeToDelete = currentNode.next
                count++
            }

            beforeNodeToDelete.next = nodeToDelete.next
            deletedNode = nodeToDelete
            nodeToDelete = null
            this.length--

            return deletedNode
        }
    }
}

module.exports = structures