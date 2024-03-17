login:
	PGPASSWORD=password psql -h localhost -p 5432 -U postgres
down -v:
	docker-compose down --volumes
